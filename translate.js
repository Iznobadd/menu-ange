import fs from "fs";

const apiKey = "AIzaSyA5QWqCwVo0z5jh3duRYJU8ycNAHLzZZpQ";
const sourceLang = "fr";
const targetLangs = ["en", "de", "es", "it"];

const translateText = async (text, targetLang) => {
  if (typeof text !== "string") return text; // Ignore les objets et tableaux

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: "text",
        }),
      }
    );

    const data = await response.json();

    if (data?.error) {
      console.error(`❌ Erreur API: ${data.error.message}`);
      return text; // Retourne le texte d’origine en cas d’erreur
    }

    return data?.data?.translations?.[0]?.translatedText || text;
  } catch (error) {
    console.error(`❌ Erreur lors de la traduction: ${error.message}`);
    return text;
  }
};

// 🔁 Fonction pour traduire récursivement un objet JSON
const translateObject = async (obj, targetLang) => {
  let translatedObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      translatedObj[key] = await translateObject(obj[key], targetLang); // Traduire récursivement
    } else {
      translatedObj[key] = await translateText(obj[key], targetLang);
    }
  }

  return translatedObj;
};

const translateJSON = async () => {
  const jsonData = JSON.parse(fs.readFileSync("src/locales/fr.json", "utf8"));

  for (const lang of targetLangs) {
    console.log(`📌 Traduction en ${lang}...`);
    const translatedData = await translateObject(jsonData, lang);

    fs.writeFileSync(
      `src/locales/${lang}.json`,
      JSON.stringify(translatedData, null, 2)
    );
    console.log(`✅ Traduction en ${lang} terminée`);
  }
};

translateJSON();
