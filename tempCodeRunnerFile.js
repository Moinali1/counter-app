let count = 0

function increment() {
    count = count + 1
    document.getElementById("primary").innerText = count
}


function save()
{
    console.log(count);
}

save()
