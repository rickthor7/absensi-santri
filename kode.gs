// Ganti dengan ID Folder Google Drive yang sudah Anda siapkan
const FOLDER_ID = "14b7iKJO5ZuVhbGItTpi6ny17cq7Hwy7R";

function doPost(e) {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data_absensi");

    const nama = e.parameter.nama;
    const kegiatan = e.parameter.kegiatan;
    const status = e.parameter.status;
    let fileUrl = "Tidak Ada";

    // Cek apakah ada file yang diupload
    if (e.parameter.file) {
      const fileData = e.parameter.file;
      const fileBlob = Utilities.newBlob(Utilities.base64Decode(fileData.split(',')[1]), fileData.split(';')[0].split(':')[1], e.parameter.filename);
      
      // Buat nama file yang unik
      const timestamp = new Date().getTime();
      const uniqueFileName = `${timestamp}_${nama}_${e.parameter.filename}`;
      
      const newFile = folder.createFile(fileBlob).setName(uniqueFileName);
      fileUrl = newFile.getUrl();
    }
    
    // Tambahkan baris baru di Google Sheet
    sheet.appendRow([
      new Date(),
      nama,
      kegiatan,
      status,
      fileUrl
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      "status": "success",
      "message": "Absensi berhasil terkirim!"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error",
      "message": error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
