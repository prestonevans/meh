for(let i = 0; i < 50; i++) {
    const div = document.createElement('div');
    div.innerText = `Hello ${i +1}`;
    document.body.append(div);
}