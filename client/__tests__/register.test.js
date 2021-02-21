import { shallowMount } from "@vue/test-utils";
import signup from "@/views/signup";

describe("Register Tests", ()=> {
    test("Displays to user to sign up", ()=>{
        const wrapper = shallowMount(signup,{
            props: { 
                user : undefined
            }
        })

        expect(wrapper.text()).toMatch("Sign up below");
    });

    test("Displays to user that they are signed in", ()=>{
        const wrapper = shallowMount(signup,{
            props: { 
                user : {}
            }
        })

        expect(wrapper.text()).toBe("Sign out before registering a new account");
    })
})