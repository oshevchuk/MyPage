/**
 * Created by Matrix on 22.06.2017.
 */
(function () {

    $(document).ready(function (e) {
        var el = $('h1.blast-root').data('text');
        var html_text = "";
        for (var i = 0; i < el.length; i++) {
            if (el[i] == " ") {
                html_text += ('<span class="blast">&nbsp;</span>');
            } else {
                if (el[i] == '|')
                    html_text += ('<br>');
                else if (el[i] == "A")
                    html_text += ('<span class="blast letter animated">' + el[i] + '</span>');
                else
                    html_text += ('<span class="blast animated">' + el[i] + '</span>');

            }
        }

        html_text+='<span class="tag"> &lt;/h1&gt;</span>';
        $('h1.blast-root').html(html_text);

        $('.blast, .contact-btn').bind('mouseenter', function (e) {
            // console.log(1);
            // $(this).css({});
            // $(this).css({ '-webkit-animation-name': 'rubberBand'}).delay(1000, function () {
            // console.log(1);
            // $(this).css({ '-webkit-animation-name': ''});
            // })
            $(this).addClass('rubberBand');
            var self = this;
            setTimeout(function () {
                $(self).removeClass('rubberBand');
            }, 1200)
        });

    });

})();