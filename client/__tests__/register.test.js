import { mount, shallowMount } from "@vue/test-utils";
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
            propsData: { 
                user : { email : "bobby@shurmuda", password : "securepassowrd123456", displayName : "bobbyS" }
            }
        })
        expect(wrapper.vm.user.displayName).toEqual("bobbyS");
        expect(wrapper.text()).toEqual("");
    })

    test("Displays to user to sign up when user is an empty object", ()=> {
        const wrapper = shallowMount(signup,{
            propsData: { 
                user : {}
            }
        })
        expect(wrapper.text()).toMatch("Sign up below");
    })

    test("User can input details", ()=>{
        const wrapper = shallowMount(signup);
        wrapper.find("#email").setValue("test email");
        wrapper.find("#password").setValue("test password");
        wrapper.find("#confirm-password").setValue("test password");
        
        expect(wrapper.vm.email).toBe("test email")
        expect(wrapper.vm.password).toBe("test password");
        expect(wrapper.vm.confirmPassword).toBe("test password");
        

    })

    test("Password vaildation",()=>{
        const wrapper = mount(signup);

        wrapper.find("#email").setValue("test email");
        wrapper.find("#password").setValue("test password");
        wrapper.find("#confirm-password").setValue("test password");

        wrapper.vm.$nextTick().then(() => {
            expect(wrapper.vm.doPasswordsMatch).toBe(true);
        })

    })

    test("Sign in button disabled if inputs not satified", ()=>{

        const wrapper = shallowMount(signup);

        expect(wrapper.find("#register-form > form > button").isVisible()).toBe(false);
    })
})