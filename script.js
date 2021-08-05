var freq = [34, 66, 53, 28, 78, 45, 100, 354, 26, 72, 65, 89, 57, 245, 12, 8, 9, 77, 346, 23]

var bar
for (var i = 0; i < freq.length; i++) {
    bar = document.createElement("div")
    bar.className = 'bar'
    bar.style = 'height:' + String(freq[i]) + 'px'
    document.getElementById('barChart').appendChild(bar)
}

myFunction = (a) => {
    let decision = confirm("Do you really want to Subscribe to " + a.value + "?")
    if (decision) {
        console.log("Successfully Subscribed to " + a.value + "!")
    }
    else {
        console.log("Changed your mind about " + a.value + " subscription now have we?")
    }
}


let some = document.getElementsByClassName('bar')
var collections = []
for (var i = 0; i < Object.keys(some).length; i++) {
    collections.push(some[i])
}

function BubbleSort() {
    console.log("Inside BubbleSort() BRO!")
    for (var i = 0; i < 20; i++) {
        for (var j = i + 1; j < 20; j++) {
            if ((parseInt(collections[i].style['height'])) > (parseInt(collections[j].style['height']))) {
                let temp = collections[i].style['height'];
                collections[i].style['height'] = collections[j].style['height'];
                collections[j].style['height'] = temp;
            }
        }
    }
    console.log("Outside BubbleSort() BRO!")
}

setInterval(BubbleSort, 5000)