const state_url = "http://127.0.0.1:5000/api/v1.0/state_data";

const states = []

d3.json(state_url).then((data) => {
    for (let i = 0; i < data.length; i++) {
        states.push((data[i].state))
    }
});
