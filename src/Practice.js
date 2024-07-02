import React from "react";

class Practice {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getReactVersion() {
        return React.version;
    }
}

export default Practice;
