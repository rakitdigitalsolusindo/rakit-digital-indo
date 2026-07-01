/**
 * Service to fetch files from a public Google Drive folder using the Google Drive v3 API.
 * Requires an API Key restricted to HTTP referrers for security in production.
 */

const API_KEY = import.meta.env.VITE_GDRIVE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_GDRIVE_FOLDER_ID;

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  webContentLink?: string;
  thumbnailLink?: string;
}

export interface FetchDriveFilesOptions {
  apiKey?: string;
  folderId?: string;
  mimeType?: string; // e.g., 'image/' to only fetch images
  orderBy?: string; // e.g., 'createdTime desc'
}

/**
 * Fetches the list of files from a specified Google Drive folder.
 * 
 * @param options configuration for the API request
 * @returns Array of DriveFile objects
 */
export async function fetchFilesFromFolder(options: FetchDriveFilesOptions = {}): Promise<DriveFile[]> {
  const apiKey = options.apiKey || API_KEY;
  const folderId = options.folderId || FOLDER_ID;

  if (!apiKey || !folderId) {
    throw new Error('Google Drive API Key and Folder ID are required.');
  }

  // Build the query to search inside the specific folder
  let q = `'${folderId}' in parents and trashed = false`;
  
  if (options.mimeType) {
    q += ` and mimeType contains '${options.mimeType}'`;
  }

  const queryParams = new URLSearchParams({
    q: q,
    key: apiKey,
    // Specify the fields we want to reduce payload size
    fields: 'files(id, name, mimeType, webContentLink, thumbnailLink)',
    orderBy: options.orderBy || 'name'
  });

  const url = `https://www.googleapis.com/drive/v3/files?${queryParams.toString()}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Google Drive API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return data.files || [];
  } catch (error) {
    console.error('Failed to fetch from Google Drive:', error);
    throw error;
  }
}
