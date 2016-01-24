(function(github_badges) { github_badges(window.jQuery, window, document); }
(function($, window, document) {
    $(function() {
        $( ".github-badge" ).each(function() {
            var a = document.createElement("a");
            a.href = this.src;
            var request = a.pathname.split('/');
            var username = request[2];
            var repo = request[3];
            var img = $(this);

            $.getJSON("https://api.github.com/repos/" + username + "/" + repo + "/issues?state=open", function( data ) {
                var openissues = data.length;

                img.attr('src', 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="69" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="69" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h45v20H0z"/><path fill="#dfb317" d="M45 0h24v20H45z"/><path fill="url(#b)" d="M0 0h69v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="22.5" y="15" fill="#010101" fill-opacity=".3">issues</text><text x="22.5" y="14">issues</text><text x="56" y="15" fill="#010101" fill-opacity=".3">' + openissues + '</text><text x="56" y="14">' + openissues + '</text></g></svg>');
            });
        });

    });
}));
