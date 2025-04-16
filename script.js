
function checkURL() {
  const url = document.getElementById("urlInput").value;
  const result = document.getElementById("result");
  let warnings = [];

  if (!url.startsWith("https://")) warnings.push("Does not use HTTPS");
  if (url.includes("@")) warnings.push("Contains '@' symbol");
  if ((url.match(/\./g) || []).length > 3) warnings.push("Too many subdomains");
  if (url.includes("--") || url.includes("-")) warnings.push("Contains dashes in domain");
  if (url.match(/\d+\.\d+\.\d+\.\d+/)) warnings.push("Uses IP instead of domain");
  if (url.length > 75) warnings.push("URL is too long");

  if (warnings.length === 0) {
    result.style.color = "#10b981";
    result.innerText = "✅ This URL seems safe.";
  } else {
    result.style.color = "#f43f5e";
    result.innerText = `⚠️ Suspicious URL!\nReasons: \n- ${warnings.join("\n- ")}`;
  }
}
