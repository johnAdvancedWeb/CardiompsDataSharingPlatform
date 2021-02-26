import { shallowMount } from "@vue/test-utils";
import AddEx from "@/views/AddExperimentalData";


describe("Adding Data Component Tests", () => {
    test("Signed in users can only Enter data", () => {
        const wrapper = shallowMount(AddEx);

        expect(wrapper.text()).toMatch("");
    });

    test("Users can enter data", ()=>{
        const wrapper = shallowMount(AddEx, {
            props: { 
                user :{ name : "somebody",  email: "some@a"},
            },
        });

       wrapper.find("#title").findAll("option")[1].setSelected();
       wrapper.find("#mutation-select").findAll("option")[1].setSelected();
       wrapper.find("#x-data").setValue("1,3,4,5");
       wrapper.find("#y-columns").setValue("col1,col2,col3");
       wrapper.find("#y1-data").setValue("1,3,4,5");
       wrapper.find("#y2-data").setValue("1,3,4,5");
       wrapper.find("#y3-data").setValue("1,3,4,5");

        expect(wrapper.text()).toMatch("Add and record experimental");
        expect(wrapper.vm.title).toEqual("Sarcomere Length vs Time");
        expect(wrapper.vm.mutation).toEqual("MYBPC3");
        expect(wrapper.vm.xAxisData).toEqual("1,3,4,5");
        expect(wrapper.vm.yColumns).toEqual("col1,col2,col3");
        expect(wrapper.vm.y1AxisData).toEqual("1,3,4,5");
        expect(wrapper.vm.y2AxisData).toEqual("1,3,4,5");
        expect(wrapper.vm.y3AxisData).toEqual("1,3,4,5");

    })

    test("User can submit data",() => {
        const wrapper =  shallowMount(AddEx, {
            props : {
                user :{ name : "somebody",  email: "some@a"}
            },
            
        });
        expect(wrapper.find("#add-experiment-form > form > button:nth-child(11)").exists()).toEqual(true);
    });

})
