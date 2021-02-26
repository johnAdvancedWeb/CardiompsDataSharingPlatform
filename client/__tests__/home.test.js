import { mount } from "@vue/test-utils";
import home from "@/views/Home";

describe("home test ",()=> {

    test("Display content", () => {
        
        const wrapper = mount(home, {
            props : { user : { test : "ada", ff: "ada"},
            experimentalData : [{ title: "Test" , mutation : "Test", postedBy : "testProp", content : "test"}],
            filteredExperiments : true,
        }
        });
    
        expect(wrapper.text()).toMatch("testProp");
    })
})