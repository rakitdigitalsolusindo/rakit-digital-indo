export function getDriveDirectUrl(url: string): string {
  if (!url || !url.includes("drive.google.com")) {
    return url; // Return original if not a Google Drive URL
  }

  // Regex to extract the FILE_ID from the URL
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);

  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  // Also check if they already provided a direct URL or an ID format
  const idMatch = url.match(/id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    const fileId = idMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  return url;
}
