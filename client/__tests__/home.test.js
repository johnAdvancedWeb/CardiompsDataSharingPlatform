import { mount } from "@vue/test-utils";
import home from "@/views/Home";

describe("home test ",()=> {

    test("render content", () => {
        
        const wrapper = mount(home);
    
        expect(wrapper.text()).toMatch("test1");
    })
})