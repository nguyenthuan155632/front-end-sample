$(document).ready(function () {
  $('#m_textarea-2').each(function (index, element) {
    $(element).wysiwyg({
        'class': index == 0 ? 'fake-bootstrap' : (index == 1 ? 'fake-uikit' : 'some-more-classes'),
        // 'selection'|'top'|'top-selection'|'bottom'|'bottom-selection'
        toolbar: index == 0 ? 'top-selection' : (index == 1 ? 'bottom-focus' : 'selection'),
        buttons: {
          // Dummy-HTML-Plugin
          dummybutton1: index != 1 ? false : {
            html: $('<input id="submit" type="button" value="Submit" />').click(function () {
              alert('Submit form');
            }),
            //showstatic: true,    // wanted on the toolbar
            showselection: false // wanted on selection
          },
          // Dummy-Button-Plugin
          dummybutton2: index != 1 ? false : {
            title: 'Dummy',
            image: '\uf1e7',
            click: function ($button) {
              // We simply make 'bold'
              if ($(element).wysiwyg('shell').getSelectedHTML())
                $(element).wysiwyg('shell').bold();
              else
                alert('No text selected');
            },
            //showstatic: true,    // wanted on the toolbar
            showselection: false // wanted on selection
          },
          // Smiley plugin
          smilies: {
            title: 'Smilies',
            image: '\uf118', // <img src="path/to/image.png" width="16" height="16" alt="" />
            popup: function ($popup, $button) {
              var list_smilies = [
                '<img src="smiley/angry-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/angry.png" width="32" height="32" alt="" />',
                '<img src="smiley/bored-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/bored-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/bored.png" width="32" height="32" alt="" />',
                '<img src="smiley/confused-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/confused.png" width="32" height="32" alt="" />',
                '<img src="smiley/crying-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/crying.png" width="32" height="32" alt="" />',
                '<img src="smiley/embarrassed.png" width="32" height="32" alt="" />',
                '<img src="smiley/emoticons.png" width="32" height="32" alt="" />',
                '<img src="smiley/happy-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/happy-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/happy-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/happy-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/happy.png" width="32" height="32" alt="" />',
                '<img src="smiley/ill.png" width="32" height="32" alt="" />',
                '<img src="smiley/in-love.png" width="32" height="32" alt="" />',
                '<img src="smiley/kissing.png" width="32" height="32" alt="" />',
                '<img src="smiley/mad.png" width="32" height="32" alt="" />',
                '<img src="smiley/nerd.png" width="32" height="32" alt="" />',
                '<img src="smiley/ninja.png" width="32" height="32" alt="" />',
                '<img src="smiley/quiet.png" width="32" height="32" alt="" />',
                '<img src="smiley/sad.png" width="32" height="32" alt="" />',
                '<img src="smiley/secret.png" width="32" height="32" alt="" />',
                '<img src="smiley/smart.png" width="32" height="32" alt="" />',
                '<img src="smiley/smile.png" width="32" height="32" alt="" />',
                '<img src="smiley/smiling.png" width="32" height="32" alt="" />',
                '<img src="smiley/surprised-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/surprised.png" width="32" height="32" alt="" />',
                '<img src="smiley/suspicious-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/suspicious.png" width="32" height="32" alt="" />',
                '<img src="smiley/tongue-out-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/tongue-out.png" width="32" height="32" alt="" />',
                '<img src="smiley/unhappy.png" width="32" height="32" alt="" />',
                '<img src="smiley/wink.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-angel.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-angry-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-angry.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-arrogant.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-bored.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-confused.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-cool-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-cool.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-crying-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-crying-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-crying.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-cute.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-embarrassed.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-emoji.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-greed.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy-5.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy-6.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy-7.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-happy.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-in-love.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-kiss-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-kiss.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-laughing-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-laughing-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-laughing.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-muted.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-nerd.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-sad-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-sad-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-sad.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-scare.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-serious.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-shocked.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-sick.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-sleepy.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-smart.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-surprised-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-surprised-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-surprised-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-surprised-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-surprised.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-suspicious.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-tongue.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-vain.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-wink-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/051-wink.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angel.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angry-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angry-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angry-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angry-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angry-5.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angry-6.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-angry.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-baby.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-blushing.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cat-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cat-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cat-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cat-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cat-5.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cat.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-confused-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-confused-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-confused.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cool-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cool.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-cow.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-crying-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-crying.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-dazed.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-dead-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-dead-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-dead-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-dead.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-desperate.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-devil-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-devil.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-dog.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-elephant.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-frog.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-goofy-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-goofy.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-5.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-6.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-7.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-8.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy-9.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-happy.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-in-love.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-kiss.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-money.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-mouse.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-moustache-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-moustache.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-muted.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-pig.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-rabbit.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-rolling.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sad-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sad-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sad-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sad-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sad.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-scared.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sceptic.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-secret-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-secret.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sick-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sick.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-sleeping.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-star.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-surprised-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-surprised-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-surprised.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-wink-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-wink-2.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-wink-3.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-wink-4.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-wink.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-worried-1.png" width="32" height="32" alt="" />',
                '<img src="smiley/081-worried.png" width="32" height="32" alt="" />',
              ];
              var $smilies = $('<div/>').addClass('wysiwyg-plugin-smilies')
                .attr('unselectable', 'on');
              $.each(list_smilies, function (index, smiley) {
                if (index != 0)
                  $smilies.append(' ');
                var $image = $(smiley).attr('unselectable', 'on');
                // Append smiley
                var imagehtml = ' ' + $('<div/>').append($image.clone()).html() + ' ';
                $image
                  .css({
                    cursor: 'pointer'
                  })
                  .click(function (event) {
                    $(element).wysiwyg('shell').insertHTML(imagehtml); // .closePopup(); - do not close the popup
                  })
                  .appendTo($smilies);
              });
              var $container = $(element).wysiwyg('container');
              $smilies.css({
                maxWidth: parseInt($container.width() * 0.95) + 'px'
              });
              $popup.append($smilies);
              // Smilies do not close on click, so force the popup-position to cover the toolbar
              var $toolbar = $button.parents('.wysiwyg-toolbar');
              if (!$toolbar.length) // selection toolbar?
                return;
              return { // this prevents applying default position
                left: parseInt(($toolbar.outerWidth() - $popup.outerWidth()) / 2),
                top: $toolbar.hasClass('wysiwyg-toolbar-bottom') ? ($container.outerHeight() - parseInt($button.outerHeight() / 4)) : (parseInt($button.outerHeight() / 4) - $popup.height())
              };
            },
            //showstatic: true,    // wanted on the toolbar
            showselection: index == 2 ? true : false // wanted on selection
          },
          // Fontname plugin
          fontname: index == 1 ? false : {
            title: 'Font',
            image: '\uf031', // <img src="path/to/image.png" width="16" height="16" alt="" />
            popup: function ($popup, $button) {
              var list_fontnames = {
                // Name : Font
                'Arial, Helvetica': 'Arial,Helvetica',
                'Verdana': 'Verdana,Geneva',
                'Georgia': 'Georgia',
                'Courier New': 'Courier New,Courier',
                'Times New Roman': 'Times New Roman,Times'
              };
              var $list = $('<div/>').addClass('wysiwyg-plugin-list')
                .attr('unselectable', 'on');
              $.each(list_fontnames, function (name, font) {
                var $link = $('<a/>').attr('href', '#')
                  .css('font-family', font)
                  .html(name)
                  .click(function (event) {
                    $(element).wysiwyg('shell').fontName(font).closePopup();
                    // prevent link-href-#
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                  });
                $list.append($link);
              });
              $popup.append($list);
            },
            //showstatic: true,    // wanted on the toolbar
            showselection: index == 0 ? true : false // wanted on selection
          },
          // Fontsize plugin
          fontsize: index != 1 ? false : {
            title: 'Size',
            style: 'color:white;background:red', // you can pass any property - example: "style"
            image: '\uf034', // <img src="path/to/image.png" width="16" height="16" alt="" />
            popup: function ($popup, $button) {
              // Hack: http://stackoverflow.com/questions/5868295/document-execcommand-fontsize-in-pixels/5870603#5870603
              var list_fontsizes = [];
              for (var i = 8; i <= 11; ++i)
                list_fontsizes.push(i + 'px');
              for (var i = 12; i <= 28; i += 2)
                list_fontsizes.push(i + 'px');
              list_fontsizes.push('36px');
              list_fontsizes.push('48px');
              list_fontsizes.push('72px');
              var $list = $('<div/>').addClass('wysiwyg-plugin-list')
                .attr('unselectable', 'on');
              $.each(list_fontsizes, function (index, size) {
                var $link = $('<a/>').attr('href', '#')
                  .html(size)
                  .click(function (event) {
                    $(element).wysiwyg('shell').fontSize(7).closePopup();
                    $(element).wysiwyg('container')
                      .find('font[size=7]')
                      .removeAttr("size")
                      .css("font-size", size);
                    // prevent link-href-#
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                  });
                $list.append($link);
              });
              $popup.append($list);
            }
            //showstatic: true,    // wanted on the toolbar
            //showselection: true    // wanted on selection
          },
          // Header plugin
          header: index != 1 ? false : {
            title: 'Header',
            style: 'color:white;background:blue', // you can pass any property - example: "style"
            image: '\uf1dc', // <img src="path/to/image.png" width="16" height="16" alt="" />
            popup: function ($popup, $button) {
              var list_headers = {
                // Name : Font
                'Header 1': '<h1>',
                'Header 2': '<h2>',
                'Header 3': '<h3>',
                'Header 4': '<h4>',
                'Header 5': '<h5>',
                'Header 6': '<h6>',
                'Code': '<pre>'
              };
              var $list = $('<div/>').addClass('wysiwyg-plugin-list')
                .attr('unselectable', 'on');
              $.each(list_headers, function (name, format) {
                var $link = $('<a/>').attr('href', '#')
                  .css('font-family', format)
                  .html(name)
                  .click(function (event) {
                    $(element).wysiwyg('shell').format(format).closePopup();
                    // prevent link-href-#
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                  });
                $list.append($link);
              });
              $popup.append($list);
            }
            //showstatic: true,    // wanted on the toolbar
            //showselection: false    // wanted on selection
          },
          bold: {
            title: 'Bold (Ctrl+B)',
            image: '\uf032', // <img src="path/to/image.png" width="16" height="16" alt="" />
            hotkey: 'b'
          },
          italic: {
            title: 'Italic (Ctrl+I)',
            image: '\uf033', // <img src="path/to/image.png" width="16" height="16" alt="" />
            hotkey: 'i'
          },
          underline: {
            title: 'Underline (Ctrl+U)',
            image: '\uf0cd', // <img src="path/to/image.png" width="16" height="16" alt="" />
            hotkey: 'u'
          },
          strikethrough: {
            title: 'Strikethrough (Ctrl+S)',
            image: '\uf0cc', // <img src="path/to/image.png" width="16" height="16" alt="" />
            hotkey: 's'
          },
          forecolor: {
            title: 'Text color',
            image: '\uf1fc' // <img src="path/to/image.png" width="16" height="16" alt="" />
          },
          highlight: {
            title: 'Background color',
            image: '\uf043' // <img src="path/to/image.png" width="16" height="16" alt="" />
          },
          removeformat: {
            title: 'Remove format',
            image: '\uf12d' // <img src="path/to/image.png" width="16" height="16" alt="" />
          }
        },
        // Other properties
        selectImage: 'Click or drop image',
        placeholderUrl: 'www.example.com',
        placeholderEmbed: '<embed/>',
        maxImageSize: [600, 200],
        //filterImageType: callback( file ) {},
        onKeyDown: function (key, character, shiftKey, altKey, ctrlKey, metaKey) {
          // E.g.: submit form on enter-key:
          //if( (key == 10 || key == 13) && !shiftKey && !altKey && !ctrlKey && !metaKey ) {
          //    submit_form();
          //    return false; // swallow enter
          //}
        },
        onKeyPress: function (key, character, shiftKey, altKey, ctrlKey, metaKey) {},
        onKeyUp: function (key, character, shiftKey, altKey, ctrlKey, metaKey) {},
        onAutocomplete: function (typed, key, character, shiftKey, altKey, ctrlKey, metaKey) {
          if (typed.indexOf('@') == 0) // startswith '@'
          {
            var usernames = [
              'Evelyn',
              'Harry',
              'Amelia',
              'Oliver',
              'Isabelle',
              'Eddie',
              'Editha',
              'Jacob',
              'Emily',
              'George',
              'Edison'
            ];
            var $list = $('<div/>').addClass('wysiwyg-plugin-list')
              .attr('unselectable', 'on');
            $.each(usernames, function (index, username) {
              if (username.toLowerCase().indexOf(typed.substring(1).toLowerCase()) !== 0) // don't count first character '@'
                return;
              var $link = $('<a/>').attr('href', '#')
                .text(username)
                .click(function (event) {
                  var url = 'http://example.com/user/' + username,
                    html = '<a href="' + url + '">@' + username + '</a> ';
                  var editor = $(element).wysiwyg('shell');
                  // Expand selection and set inject HTML
                  editor.expandSelection(typed.length, 0).insertHTML(html);
                  editor.closePopup().getElement().focus();
                  // prevent link-href-#
                  event.stopPropagation();
                  event.preventDefault();
                  return false;
                });
              $list.append($link);
            });
            if ($list.children().length) {
              if (key == 13) {
                $list.children(':first').click();
                return false; // swallow enter
              }
              // Show popup
              else if (character || key == 8)
                return $list;
            }
          }
        },
        onImageUpload: function (insert_image) {
          // A bit tricky, because we can't easily upload a file via
          // '$.ajax()' on a legacy browser without XMLHttpRequest2.
          // You have to submit the form into an '<iframe/>' element.
          // Call 'insert_image(url)' as soon as the file is online
          // and the URL is available.
          // Example server script (written in PHP):
          /*
          <?php
          $upload = $_FILES['upload-filename'];
          // Crucial: Forbid code files
          $file_extension = pathinfo( $upload['name'], PATHINFO_EXTENSION );
          if( $file_extension != 'jpeg' && $file_extension != 'jpg' && $file_extension != 'png' && $file_extension != 'gif' )
              die("Wrong file extension.");
          $filename = 'image-'.md5(microtime(true)).'.'.$file_extension;
          $filepath = '/path/to/'.$filename;
          $serverpath = 'http://domain.com/path/to/'.$filename;
          move_uploaded_file( $upload['tmp_name'], $filepath );
          echo $serverpath;
          */
          // Example client script (without upload-progressbar):
          var iframe_name = 'legacy-uploader-' + Math.random().toString(36).substring(2);
          $('<iframe>').attr('name', iframe_name)
            .load(function () {
              // <iframe> is ready - we will find the URL in the iframe-body
              var iframe = this;
              var iframedoc = iframe.contentDocument ? iframe.contentDocument :
                (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
              var iframebody = iframedoc.getElementsByTagName('body')[0];
              var image_url = iframebody.innerHTML;
              insert_image(image_url);
              $(iframe).remove();
            })
            .appendTo(document.body);
          var $input = $(this);
          $input.attr('name', 'upload-filename')
            .parents('form')
            .attr('action', '/script.php') // accessing cross domain <iframes> could be difficult
            .attr('method', 'POST')
            .attr('enctype', 'multipart/form-data')
            .attr('target', iframe_name)
            .submit();
        },
        forceImageUpload: false, // upload images even if File-API is present
        videoFromUrl: function (url) {
          // Contributions are welcome :-)

          // youtube - http://stackoverflow.com/questions/3392993/php-regex-to-get-youtube-video-id
          var youtube_match = url.match(/^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?(?:youtu\.be|youtube\.com)\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/)([^\?&\"'>]+)/);
          if (youtube_match && youtube_match[1].length == 11)
            return '<iframe src="//www.youtube.com/embed/' + youtube_match[1] + '" width="640" height="360" frameborder="0" allowfullscreen></iframe>';

          // vimeo - http://embedresponsively.com/
          var vimeo_match = url.match(/^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?vimeo\.com\/([0-9]+)$/);
          if (vimeo_match)
            return '<iframe src="//player.vimeo.com/video/' + vimeo_match[1] + '" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

          // dailymotion - http://embedresponsively.com/
          var dailymotion_match = url.match(/^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?dailymotion\.com\/video\/([0-9a-z]+)$/);
          if (dailymotion_match)
            return '<iframe src="//www.dailymotion.com/embed/video/' + dailymotion_match[1] + '" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

          // undefined -> create '<video/>' tag
        }
      })
      .change(function () {
        if (typeof console != 'undefined')
        ; //console.log( 'change' );
      })
      .focus(function () {
        if (typeof console != 'undefined')
        ; //console.log( 'focus' );
      })
      .blur(function () {
        if (typeof console != 'undefined')
        ; //console.log( 'blur' );
      });
  });
});
