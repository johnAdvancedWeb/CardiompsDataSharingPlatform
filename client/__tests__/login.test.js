import { shallowMount, mount } from "@vue/test-utils";
import signin from "@/views/signin";

describe("Login View Tests", ()=> {
    test("Displays to user to sign in when user is undefined", ()=>{
        const wrapper = shallowMount(signin,{
            props: { 
                user : undefined
            }
        })

        expect(wrapper.text()).toMatch("Sign in below");
    });

    test("Displays to user that they are signed in", ()=>{
        const wrapper = shallowMount(signin,{
            props: { 
                user : {name: "bob" , email: "straightChillin@chill"}
            }
        })

        expect(wrapper.text()).toBe("");
    })

    test("Display the login error", ()=>{

        const wrapper = mount(signin);
        wrapper.find("#login-form > form > button").trigger("click");
        wrapper.vm.$nextTick().then(() => {
            expect(wrapper.vm.errorLogin).toBeTruthy;
          })
    })

    test("User can input details", ()=>{
        const wrapper = shallowMount(signin);
        wrapper.find("#email").setValue("test email");
        wrapper.find("#password").setValue("test password");
        
        expect(wrapper.vm.email).toBe("test email")
        expect(wrapper.vm.password).toBe("test password");
    })

})
