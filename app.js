get();

setInterval(get, 2000);

function send()
{
    var message = document.getElementById('message').value;
    console.log(message);
    document.getElementById('message').value="";
}

function get()
{
    (async () =>
    {
        var response = await fetch('chat.txt');
        var answer = await response.text();
        document.getElementById('out').innerText = answer;
    }
    );
}