import { mount } from "@vue/test-utils";
import home from "@/views/Home";

describe("home test ",()=> {

    test("render content", () => {
        
        const wrapper = mount(home,{
            data() {
                return {
                isModalVisible: false,
                actionDescription: "",
                disease: [ { diseaseId : "test1", diseaseName : "test" },{diseaseId : "test2", diseaseName: "test"} ],
                catTermMap: [ {catLabel: "test1", terms : [{name : "test ", definition : "testing" }]}, {catLabel: "test2", terms : [{name : "test ", definition : "testing" }],}]
                }
            }
        })
    
        expect(wrapper.text()).toMatch("test1");
    })
})