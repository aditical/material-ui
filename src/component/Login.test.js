const Login = require("./Login")

// @ponicode
describe("onChangeEmail", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["bc23a9d531064583ace8f67dad60f6bb", 12, "bc23a9d531064583ace8f67dad60f6bb"], [987650, 12, "a1969970175"], [987650, 987650, "bc23a9d531064583ace8f67dad60f6bb"]]
        inst = new Login.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onChangeEmail({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onChangeEmail({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onChangeEmail({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onChangeEmail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onChangePassword", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12, "a1969970175", 12], [987650, "bc23a9d531064583ace8f67dad60f6bb", 12], [56784, 12, 12345]]
        inst = new Login.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onChangePassword({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onChangePassword({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onChangePassword({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onChangePassword(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("submitForm", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[56784, "a1969970175", 987650], [987650, "a1969970175", 12345], [987650, 12345, 12]]
        inst = new Login.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.submitForm()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12345, 987650, 12], [56784, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], ["bc23a9d531064583ace8f67dad60f6bb", 12, "bc23a9d531064583ace8f67dad60f6bb"]]
        inst = new Login.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("validateApiKey", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[56784, 12345, 12], [987650, "a1969970175", "bc23a9d531064583ace8f67dad60f6bb"], [12, 987650, "a1969970175"]]
        inst = new Login.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.validateApiKey(1234567890123456789012345678901234567890)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.validateApiKey("someRandomApiKey")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.validateApiKey("zaCELgL. 0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.validateApiKey(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
