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
    
    test("User can input details", ()=>{
        const wrapper = shallowMount(signup);
        wrapper.find("#email").setValue("test email");
        wrapper.find("#password").setValue("test password");
        wrapper.find("#confirm-password").setValue("test password");
        
        expect(wrapper.vm.credential.email).toBe("test email")
        expect(wrapper.vm.credential.password).toBe("test password");
        expect(wrapper.vm.credential.confirmPassword).toBe("test password");
        

    })

    test("Password vaildation",()=>{
        const wrapper = mount(signup);

        wrapper.find("#password").setValue("test");
        wrapper.find("#confirm-password").setValue("TEST");

        expect(wrapper.vm.doPasswordsMatch).toBe(false);

        wrapper.find("#confirm-password").setValue("test");

        expect(wrapper.vm.doPasswordsMatch).toBe(true);

    })

    test("Form validation", ()=> {
        const wrapper = mount(signup);
        
        wrapper.find("#full-name").setValue("test name");
        wrapper.find("#institution").setValue("test insit");
        wrapper.find("#email").setValue("test email");
        wrapper.find("#password").setValue("test password");
        wrapper.find("#confirm-password").setValue("test password");

        expect(wrapper.vm.validation).toEqual(true);

        wrapper.find("#institution").setValue("");

        expect(wrapper.vm.validation).toEqual(false);

    })
})