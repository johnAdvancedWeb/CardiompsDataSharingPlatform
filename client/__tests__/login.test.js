import { shallowMount, mount } from "@vue/test-utils";
import signin from "@/views/signin";

describe("Login Tests", ()=> {
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

        expect(wrapper.text()).toBe("User is already signed in");
    })

    test("Displays the resgister page",  ()=> {
        const wrapper = mount(signin, {
            data() {
                return {
                  isModalVisible: true,
                  actionDescription: "resetPassword",
                }
              },
        }
            );
        
        expect(wrapper.text()).toMatch("Reset your password here");
    })

    test("Display the login error", ()=>{

        const wrapper = mount(signin);
        wrapper.find("#login-form > form > button").trigger("click");
        wrapper.vm.$nextTick(() => {
            wrapper.vm.closeModal() 
            expect(wrapper.vm.errorLogin).toBeTruthy;
            
          })
    })

    test("Displays to user to sign in when user is an empty object", ()=> {
        const wrapper = shallowMount(signin,{
            props: { 
                user : {}
            }
        })

        expect(wrapper.text()).toMatch("Sign in below");
    })

})