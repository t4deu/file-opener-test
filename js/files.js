    var mimes  = {
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'jpe': 'image/jpeg',
        'gif': 'image/gif',
        'png': 'image/png',
        'bmp': 'image/bmp',
        'tif': 'image/tiff',
        'tiff': 'image/tiff',
        'ico': 'image/x-icon',
 
        // Video formats
        'asf': 'video/x-ms-asf',
        'asx': 'video/x-ms-asf',
        'wmv': 'video/x-ms-wmv',
        'wmx': 'video/x-ms-wmx',
        'wm': 'video/x-ms-wm',
        'avi': 'video/avi',
        'divx': 'video/divx',
        'flv': 'video/x-flv',
        'qt': 'video/quicktime',
        'mov': 'video/quicktime',
        'mpe': 'video/mpeg',
        'mpg': 'video/mpeg',
        'mpeg': 'video/mpeg',
        'mp4': 'video/mp4',
        'm4v': 'video/mp4',
        'ogv': 'video/ogg',
        'webm': 'video/webm',
        'mkv': 'video/x-matroska',
 
        // Text formats
        'txt': 'text/plain',
        'asc': 'text/plain',
        'c': 'text/plain',
        'cc': 'text/plain',
        'h': 'text/plain',
        'csv': 'text/csv',
        'tsv': 'text/tab-separated-values',
        'ics': 'text/calendar',
        'rtx': 'text/richtext',
        'css': 'text/css',
        'htm': 'text/html',
        'html': 'text/html',
 
        // Audio formats
        'mp3': 'audio/mpeg',
        'm4a': 'audio/mpeg',
        'm4b': 'audio/mpeg',
        'ram': 'audio/x-realaudio',
        'ra': 'audio/x-realaudio',
        'wav': 'audio/wav',
        'ogg': 'audio/ogg',
        'oga': 'audio/ogg',
        'mid': 'audio/midi',
        'midi': 'audio/midi',
        'wma': 'audio/x-ms-wma',
        'wax': 'audio/x-ms-wax',
        'mka': 'audio/x-matroska',
 
        // Misc application formats
        'rtf': 'application/rtf',
        'js': 'application/javascript',
        'pdf': 'application/pdf',
        'swf': 'application/x-shockwave-flash',
        'class': 'application/java',
        'tar': 'application/x-tar',
        'zip': 'application/zip',
        'gzip': 'application/x-gzip',
        'gz': 'application/x-gzip',
        'rar': 'application/rar',
        '7z': 'application/x-7z-compressed',
        'exe': 'application/x-msdownload',
 
        // MS Office formats
        'doc': 'application/msword',
        'ppt': 'application/vnd.ms-powerpoint',
        'pps': 'application/vnd.ms-powerpoint',
        'pot': 'application/vnd.ms-powerpoint',
        'wri': 'application/vnd.ms-write',
        'xla': 'application/vnd.ms-excel',
        'xls': 'application/vnd.ms-excel',
        'xlt': 'application/vnd.ms-excel',
        'xlw': 'application/vnd.ms-excel',
        'mdb': 'application/vnd.ms-access',
        'mpp': 'application/vnd.ms-project',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'docm': 'application/vnd.ms-word.document.macroEnabled.12',
        'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'dotm': 'application/vnd.ms-word.template.macroEnabled.12',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'xlsm': 'application/vnd.ms-excel.sheet.macroEnabled.12',
        'xlsb': 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
        'xltx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'xltm': 'application/vnd.ms-excel.template.macroEnabled.12',
        'xlam': 'application/vnd.ms-excel.addin.macroEnabled.12',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'pptm': 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'ppsx': 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'ppsm': 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
        'potx': 'application/vnd.openxmlformats-officedocument.presentationml.template',
        'potm': 'application/vnd.ms-powerpoint.template.macroEnabled.12',
        'ppam': 'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'sldx': 'application/vnd.openxmlformats-officedocument.presentationml.slide',
        'sldm': 'application/vnd.ms-powerpoint.slide.macroEnabled.12',
        'onetoc': 'application/onenote',
        'onetoc2': 'application/onenote',
        'onetmp': 'application/onenote',
        'onepkg': 'application/onenote',
 
        // OpenOffice formats
        'odt': 'application/vnd.oasis.opendocument.text',
        'odp': 'application/vnd.oasis.opendocument.presentation',
        'ods': 'application/vnd.oasis.opendocument.spreadsheet',
        'o dg': 'application/vnd.oasis.opendocument.graphics',
        'odc': 'application/vnd.oasis.opendocument.chart',
        'odb': 'application/vnd.oasis.opendocument.database',
        'odf': 'application/vnd.oasis.opendocument.formula',
 
        // WordPerfect formats
        'wp': 'application/wordperfect',
        'wpd': 'application/wordperfect',
 
        // iWork formats
        'key': 'application/vnd.apple.keynote',
        'numbers': 'application/vnd.apple.numbers',
        'pages': 'application/vnd.apple.pages',
    };
    var Files = {};
    
    Files.open = function(path, successCallback, errorCallback) {
        var ext = getExt(path);
        var type = getMimeByExt(ext);
        if (typeof(successCallback) != 'function') {
            successCallback = function(){
              alert('success');
            };
        }
 
        if (typeof(errorCallback) != 'function') {
            errorCallback = function(e){
              alert('Error status: ' + e.status + ' - Error message: ' + e.message);
            };
        }
 
        if(type === false) {
            alert('error: unknown file type');
            return;
        }
 
        try {
            alert('open path:'+ path + ' type: '+ type);            
            cordova.plugins.fileOpener2.open(       
                path, // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf        
                type,       
                {       
                    error: successCallback,     
                    success: errorCallback  
                }       
            );      
        } catch (e) {
            alert('error: ' + JSON.stringify(e));
        }
        
    }


    function getExt(string){
        return string.split('.').pop();
    }
 
    function getMimeByExt(ext) {
        ext = ext.toLowerCase();
        if (mimes.hasOwnProperty(ext)) {
           return mimes[ext];
        }
        return false;
    }

 
    Files.download = function(url, callback) {
 
        /* Get file extantion from URL*/
        var ext = url.split('.').pop();
 console.log(ext);
        /* Generate file name */
        var fileInternal = new Date().getTime() + '.' + ext;
 
        /* Detect device */
        var iosDevice = navigator.userAgent.match(/(iPhone|iPod|iPad)/i);
 
            requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
                var fileTransfer = new FileTransfer();
 
                var downloadPath;
 
                /* Download path for iOS and android are different */
                if (iosDevice !== null) {
                    downloadPath = cordova.file.documentsDirectory + fileInternal;
                } else {
                    downloadPath = cordova.file.externalDataDirectory + fileInternal;
                }
 
                fileTransfer.download(
                    url,
                    downloadPath,
                    function(file) {
                        callback(file.nativeURL);
                    },
                    function(error) {
                        callback(error);
                    },
                    true
                );
            }, function(error) {
                callback(error);
            });
  }
