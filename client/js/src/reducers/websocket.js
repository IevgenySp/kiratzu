const initialState = new WebSocket('ws://127.0.0.1:8001');

export default function websocket(state = initialState, action) {
    return state;
}