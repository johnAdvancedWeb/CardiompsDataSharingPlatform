import { shallowMount, mount } from "@vue/test-utils";
import about from "@/views/About";

describe("MyPost Component Tests", ()=> {

    test("Render loading screen", ()=>{
        const wrapper = shallowMount(about);

        expect(wrapper.text()).toBe("Content is loading...")
    });

    test("render content", () => {
        const wrapper = mount(about,{
            data() {
                return {
                isModalVisible: false,
                actionDescription: "",
                disease: [ { diseaseId : "test1", diseaseName : "test" },{diseaseId : "test2", diseaseName: "test"} ],
                catTermMap: [ {catLabel: "test1", terms : [{name : "test ", definition : "testing" }]}, {catLabel: "test2", terms : [{name : "test ", definition : "testing" }],}]
                }
            }
        })

        expect(wrapper.text()).not.toMatch("Content is loading...");
    })

})