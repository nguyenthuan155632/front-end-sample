$ ->
  $('#m_textarea').richText
    bold: true
    italic: true
    underline: true
    leftAlign: true
    centerAlign: true
    rightAlign: true
    ol: false
    ul: false
    heading: true
    fontColor: true
    imageUpload: false
    fileUpload: false
    videoEmbed: false
    urls: false
    table: false
    removeStyles: false
    code: true
    colors: []
    fileHTML: ''
    imageHTML: ''
    useSingleQuotes: false

  window.emojiPicker = new EmojiPicker(
    emojiable_selector: '[data-emojiable=true]'
    assetsPath: './../assets/img'
    popupButtonClasses: 'fa fa-smile-o')
  window.emojiPicker.discover()
  
  $('.m_slide_list').slick
    speed: 300
    dots: true
    arrows: false
    slidesToShow: 1
    slidesToScroll: 1
    focusOnSelect: true
    autoplay: true
    
  Dropzone.options.photoDropzone =
    url: '#'
    previewsContainer: '.dropzone-previews'
    uploadMultiple: true
    parallelUploads: 100
    maxFiles: 100