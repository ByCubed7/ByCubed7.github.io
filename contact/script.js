
function Send()
{
    // Get Message
    var messageBox = document.getElementById('message');
    if (messageBox == null) return;
    var message = messageBox.value;

    var authorBox = document.getElementById('author');
    if (authorBox == null) return;
    var author = authorBox.value;

    SendMessage(
        author + " send a message!",
        message
    );
}
