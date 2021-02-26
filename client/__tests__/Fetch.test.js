import { shallowMount } from "@vue/test-utils";
import about from "@/views/FetchExternalData";

describe("MyPost Component Tests", ()=> {

    test("Display Content ", ()=>{
        const wrapper = shallowMount(about, {
           props:{
            user : { a : "test"}
           },
           data() {
            return {
            isModalVisible: false,
            actionDescription: "",
            disease: [ { diseaseId : "test1", diseaseName : "test" },{diseaseId : "test2", diseaseName: "test"} ],
            catTermMap: [ {catLabel: "test1", terms : [{name : "test ", definition : "testing" }]}, {catLabel: "test2", terms : [{name : "test ", definition : "testing" }],}]
            }
        }
        });

        expect(wrapper.text()).toMatch("External Cardiomyopathy DataCardiomyopathy");
        expect(wrapper.text()).toMatch("test");
        expect(wrapper.text()).toMatch("testing");

    });

})