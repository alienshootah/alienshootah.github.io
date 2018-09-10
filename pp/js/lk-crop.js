(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node / CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
})(function ($) {

  'use strict';

  var console = window.console || { log: function () {} };

  function CropAvatar($element) {
    this.$container = $element;

    this.$avatarView = $('.js-avatar-view');
    this.$avatar = this.$avatarView.parents('.js-file-photo-parent').find('.js-file-photo-img');
    // this.$avatarModal = this.$container.find('#avatar-modal');
    // this.$loading = this.$container.find('.loading');

    this.$avatarForm = this.$container.find('.js-avatar-form');
    this.$avatarUpload = this.$avatarForm.find('.js-avatar-upload');
    this.$avatarSrc = this.$avatarForm.find('.js-avatar-src');
    this.$avatarData = this.$avatarForm.find('.js-avatar-data');
    this.$avatarInput = this.$avatarForm.find('.js-avatar-input');
    this.$avatarSave = this.$avatarForm.find('.js-avatar-save');
    // this.$avatarBtns = this.$avatarForm.find('.avatar-btns');

    this.$avatarWrapper = this.$container.find('.js-avatar-wrapper');
    // this.$avatarPreview = this.$container.find('.avatar-preview');

    this.init();
  }

  CropAvatar.prototype = {
    constructor: CropAvatar,

    support: {
      fileList: !!$('<input type="file">').prop('files'),
      blobURLs: !!window.URL && URL.createObjectURL,
      formData: !!window.FormData
    },

    init: function () {
      this.support.datauri = this.support.fileList && this.support.blobURLs;

      if (!this.support.formData) {
        this.initIframe();
      }

      this.initTooltip();
      // this.initModal();
      this.addListener();
    },

    addListener: function () {
      this.$avatarView.on('click', $.proxy(this.click, this));
      this.$avatarInput.on('change', $.proxy(this.change, this));
      this.$avatarForm.on('submit', $.proxy(this.submit, this));
      // this.$avatarBtns.on('click', $.proxy(this.rotate, this));
    },

    initTooltip: function () {
      this.$avatarView.tooltip({
        placement: 'bottom'
      });
    },

    // initModal: function () {
    //   this.$avatarModal.modal({
    //     show: false
    //   });
    // },

    initPreview: function () {
      var url = this.$avatar.attr('src');

      // this.$avatarPreview.html('<img src="' + url + '">');
    },

    initIframe: function () {
      var target = 'upload-iframe-' + (new Date()).getTime();
      var $iframe = $('<iframe>').attr({
            name: target,
            src: ''
          });
      var _this = this;

      // Ready ifrmae
      $iframe.one('load', function () {

        // respond response
        $iframe.on('load', function () {
          var data;

          try {
            data = $(this).contents().find('body').text();
          } catch (e) {
            console.log(e.message);
          }

          if (data) {
            try {
              data = $.parseJSON(data);
            } catch (e) {
              console.log(e.message);
            }

            _this.submitDone(data);
          } else {
            _this.submitFail('Image upload failed!');
          }

          _this.submitEnd();

        });
      });

      this.$iframe = $iframe;
      this.$avatarForm.attr('target', target).after($iframe.hide());
    },

    click: function () {
      // this.$avatarModal.modal('show');
      this.initPreview();
    },

    change: function () {
      var files;
      var file;

      if (this.support.datauri) {
        files = this.$avatarInput.prop('files');

        if (files.length > 0) {
          file = files[0];

          if (this.isImageFile(file)) {
            if (this.url) {
              URL.revokeObjectURL(this.url); // Revoke the old one
            }

            this.url = URL.createObjectURL(file);
            this.startCropper();
          }
        }
      } else {
        file = this.$avatarInput.val();

        if (this.isImageFile(file)) {
          this.syncUpload();
        }
      }
    },

    submit: function () {
      if (!this.$avatarSrc.val() && !this.$avatarInput.val()) {
        return false;
      }

      if (this.support.formData) {
        this.ajaxUpload();
        return false;
      }
    },

    rotate: function (e) {
      var data;

      if (this.active) {
        data = $(e.target).data();

        if (data.method) {
          this.$img.cropper(data.method, data.option);
        }
      }
    },

    isImageFile: function (file) {
      if (file.type) {
        return /^image\/\w+$/.test(file.type);
      } else {
        return /\.(jpg|jpeg|png|gif)$/.test(file);
      }
    },

    startCropper: function () {
      var _this = this;
      $('.js-upload-container').fadeOut();
      $('.js-mini-crop-container').fadeIn();
      if (this.active) {
        this.$img.cropper('replace', this.url);
      } else {
        this.$img = $('<img src="' + this.url + '">');
        this.$avatarWrapper.empty().html(this.$img);
        this.$img.cropper({
          aspectRatio: 1,
          // preview: this.$avatarPreview.selector,
          crop: function (e) {
            var json = [
                  '{"x":' + e.x,
                  '"y":' + e.y,
                  '"height":' + e.height,
                  '"width":' + e.width,
                  '"rotate":' + e.rotate + '}'
                ].join();

            _this.$avatarData.val(json);
          }
        });

        this.active = true;
      }

      // this.$avatarModal.one('hidden.bs.modal', function () {
      //   _this.$avatarPreview.empty();
      //   _this.stopCropper();
      // });
    },

    stopCropper: function () {
      if (this.active) {
        this.$img.cropper('destroy');
        this.$img.remove();
        this.active = false;
      }
    },

    ajaxUpload: function () {
      var url = this.$avatarForm.attr('action');
      var data = new FormData(this.$avatarForm[0]);
      var _this = this;

      $.ajax(url, {
        type: 'post',
        data: data,
        dataType: 'json',
        processData: false,
        contentType: false,

        beforeSend: function () {
          _this.submitStart();
        },

        success: function (data) {
          _this.submitDone(data);
        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {
          // _this.submitFail(textStatus || errorThrown);
        },

        complete: function () {
          _this.submitEnd();
        }
      });
    },

    syncUpload: function () {
      this.$avatarSave.click();
    },

    submitStart: function () {
      // this.$loading.fadeIn();
    },

    submitDone: function (data) {
      console.log(data);

      if ($.isPlainObject(data) && data.state === 200) {
        if (data.result) {
          this.url = data.result;

          if (this.support.datauri || this.uploaded) {
            this.uploaded = false;
            this.cropDone();
          } else {
            this.uploaded = true;
            this.$avatarSrc.val(this.url);
            this.startCropper();
          }

          this.$avatarInput.val('');
        } else if (data.message) {
          this.alert(data.message);
        }
      } else {
        this.alert('Failed to response');
      }
    },

    submitFail: function (msg) {
      this.alert(msg);
    },

    submitEnd: function () {
      // this.$loading.fadeOut();
    },

    cropDone: function () {
      this.$avatarForm.get(0).reset();
      this.$avatar.attr('src', this.url);
      this.stopCropper();
      // this.$avatarModal.modal('hide');
    },

    alert: function (msg) {
      var $alert = [
            '<div class="alert alert-danger avatar-alert alert-dismissable">',
              '<button type="button" class="close" data-dismiss="alert">&times;</button>',
              msg,
            '</div>'
          ].join('');

      this.$avatarUpload.after($alert);
    }
  };

  $(function () {
    return new CropAvatar($('.js-crop-avatar'));
  });

});

/* dropzone*/
function dropZone() {
  if($('#js-multiple-dropzone').length) {
    var mutipleDropZone = document.querySelector("#js-multiple-dropzone");
    var previewNode = document.querySelector("#dropzone-template");
    previewNode.id = "";
    var previewTemplate = previewNode.parentNode.innerHTML;
    previewNode.parentNode.removeChild(previewNode);

    

    var myDropzone = new Dropzone(mutipleDropZone, { // Make the whole body a dropzone
      url: "/target-url", // Set the url
      thumbnailWidth: 280,
      thumbnailHeight: 375,
      parallelUploads: 20,
      previewTemplate: previewTemplate,
      autoQueue: false, // Make sure the files aren't queued until manually added
      previewsContainer: ".js-dropzone-previews", // Define the container to display the previews
      clickable: ".js-multiple-dropzone-container", // Define the element that should be used as click trigger to select files.
      init: function() {
        this.on("addedfile", function() {
          var _this = this;
          function removeFiles() {
             if ( _this.files[3]!=null ){
             
              _this.removeFile(_this.files[0]);
              
              setTimeout(function() {
                var blocks = $(_this)[0].previewsContainer;
                var mainContainer = $('.dropzone-multiple .lk-photography__image');
                var firstImg = $(blocks).find('.dropzone-multiple__preview-item').first().find('.input-file__img-inner img')[0];
                mainContainer.find('.lk-photography__img').attr('src', $(firstImg).attr('src'));
                mainContainer.find('.lk-photography__img').parent().addClass('active');
              }, 200)
            }
          }
          
          function posFiles() {
            if ( _this.files.length == 1 ) {
              
              setTimeout(function() {
                var blocks = $(_this)[0].previewsContainer;
                var mainContainer = $('.dropzone-multiple .lk-photography__image');
                var firstImg = $(blocks).find('.dropzone-multiple__preview-item').first().find('.input-file__img-inner img')[0];
                mainContainer.find('.lk-photography__img').attr('src', $(firstImg).attr('src'));
                mainContainer.find('.lk-photography__img').parent().addClass('active');
              }, 200)
              
             
            }
          }
          removeFiles();
          posFiles();
        });
        this.on('removedfile', function(e) {
          var _this = this;
          var blocks = $(_this)[0].previewsContainer;
          var mainContainer = $('.dropzone-multiple .lk-photography__image');
          var firstImg = $(blocks).find('.dropzone-multiple__preview-item').first().find('.input-file__img-inner img')[0];
          var defaultImg = mainContainer.find('.lk-photography__img').data('default');
          
          if ( !_this.files.length ) {
            mainContainer.find('.lk-photography__img').attr('src', defaultImg);
            mainContainer.find('.lk-photography__img').parent().removeClass('active');
          }else {
            setTimeout(function() {
              blocks = $(_this)[0].previewsContainer;
              mainContainer = $('.dropzone-multiple .lk-photography__image');
              firstImg = $(blocks).find('.dropzone-multiple__preview-item').first().find('.input-file__img-inner img')[0];
              mainContainer.find('.lk-photography__img').attr('src', $(firstImg).attr('src'));
              mainContainer.find('.lk-photography__img').parent().addClass('active');
            }, 200)
          }

          
        })
      }
    });

    $('.js-dropzone-trigger').on('click', function(e) {
      e.preventDefault();
      $('.dz-clickable').trigger('click');
    })

  }
}
/* dropzone end*/

$(document).on('ready', function() {
  dropZone();
})
