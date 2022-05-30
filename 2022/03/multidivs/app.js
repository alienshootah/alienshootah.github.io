var longMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis purus non ligula mollis interdum. Fusce mauris neque, fermentum non hendrerit a, pretium facilisis arcu. Praesent ac purus at mi dictum semper. Sed tempus bibendum ligula eu semper. Aliquam erat volutpat. In luctus, massa a ornare aliquam, orci elit pulvinar ante, feugiat tempus mi orci eu quam. Vivamus ultrices vehicula mi in vestibulum. Phasellus venenatis massa in urna consequat a pulvinar ante consectetur. Nam ornare blandit libero ut ultrices. Fusce semper venenatis sem non mollis. Ut justo mi, rutrum eget congue vitae, tempus in risus. Mauris ac faucibus eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec malesuada, enim id aliquet gravida, velit velit vehicula ante, eget feugiat sem orci eu mi. Ut nulla leo, viverra blandit ultricies ac, bibendum sit amet quam. Quisque imperdiet egestas ligula, nec mattis felis vestibulum ullamcorper. Nullam fringilla ultrices leo, eu mollis arcu tincidunt eu. Nulla ullamcorper justo ut arcu vehicula nec iaculis mi luctus. Nam sagittis molestie congue. Fusce ultrices ante nec lorem auctor luctus eu vel odio. Sed facilisis dignissim lectus ac convallis. Nam sagittis volutpat fringilla. Suspendisse ornare est laoreet ante gravida at tristique leo lobortis. Pellentesque tortor libero, auctor sed iaculis vitae, bibendum in metus. Nunc vestibulum diam in mi cursus gravida. Etiam vel dui libero, nec placerat arcu. Curabitur vel nunc ut dui molestie interdum. Sed malesuada euismod velit, quis sodales massa fringilla eget. Morbi facilisis elementum risus, et gravida arcu ultrices ac. Quisque commodo ultricies quam a varius. Donec quis arcu vitae dui volutpat volutpat ut non felis. Nunc enim lorem, vulputate ut tincidunt a, rutrum sit amet eros. Proin magna neque, commodo nec tincidunt nec, varius eu nibh. Curabitur sit amet sem urna, quis volutpat ipsum. Mauris condimentum pretium risus nec sagittis. Aliquam faucibus condimentum rhoncus. Suspendisse potenti. Duis vitae augue vitae ante auctor lobortis. Phasellus non mi velit, sit amet cursus libero. Donec iaculis consectetur massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, velit vel pharetra egestas, nibh metus interdum neque, ut malesuada libero felis venenatis dolor. Nam blandit nibh at purus viverra lobortis. Suspendisse gravida orci ut sem euismod faucibus. Etiam nec est urna, quis gravida augue. Fusce vestibulum eleifend purus, ut aliquam sapien cursus sit amet. Nunc libero augue, pulvinar sit amet placerat eget, elementum et nulla. Nam eget tortor orci. Ut laoreet condimentum velit non gravida. Sed commodo, eros ut convallis faucibus, ligula arcu adipiscing nisl, vehicula suscipit ipsum elit vel mi.',
    charLimit = 160,
    maxSplits = 3,
    placeholder,
    indicator,
    breakPoint,
    messages = [],
    n,
    m,
    splits;

// spit out each message
$.each(messages, function(n, message) {
    $('body').append('<p>' + message + '</p>');
})

var totalLength = longMessage.length + (9 * 5);

// Use some obscure placeholder character that no one will actually type... (This part is a
// little dangerous...
if (totalLength <= (charLimit * 9)) {
    placeholder = '\v';
}
else {
    placeholder = '\v\v';
}

for (n = 0, m = 0; n < longMessage.length / charLimit && n < maxSplits; n++) {
    m = n * charLimit;
    // set the indicator so we can now how long it is
    indicator = '(' + (n + 1) + '/' + placeholder + ')';
    // set the breakpoint, taking indicator length into consideration
    breakPoint = m + charLimit - indicator.length;
    // insert the indicator into the correct spot
    longMessage = longMessage.substring(0, breakPoint) + indicator + longMessage.substring(breakPoint);
}

// Replace the placeholder.
longMessage = longMessage.replace(/\v+/g, n);

splits = n;

// Split the indicator-inserted message at every charLimit.
for (n = 0; n < splits; n++) {
    m = n * charLimit;
    messages.push(longMessage.substring(m, m + charLimit));
}

