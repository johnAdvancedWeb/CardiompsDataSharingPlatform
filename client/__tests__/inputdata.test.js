import { shallowMount } from "@vue/test-utils";
import AddEx from "@/views/AddExperimentalData";


describe("MyPost Component Tests", ()=> {
    test("Render component", ()=>{
        const wrapper = shallowMount(AddEx);

        expect(wrapper.text()).toMatch("Add and record experimental data");
    });

    test("User can input data", ()=>{
        const wrapper = shallowMount(AddEx);
        wrapper.find("#slug").setValue("test");
        wrapper.find("#title").setValue("test");
        wrapper.find("#description").setValue("test");
        wrapper.find("#title").setValue("test");
        wrapper.find("#tags").setValue("test");
        wrapper.find("#content").setValue("test");
        
        expect(wrapper.vm.slug).toBe("test")
        expect(wrapper.vm.title).toBe("test");
        expect(wrapper.vm.description).toBe("test");
        expect(wrapper.vm.content).toBe("test")
        expect(wrapper.vm.tags).toBe("test");
    })

    test("form vaildation", ()=>{
        
    })
})