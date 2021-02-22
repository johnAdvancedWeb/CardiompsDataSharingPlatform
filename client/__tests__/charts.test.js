import {  mount } from "@vue/test-utils";
import Bar from "@/views/Bar";
import Line from "@/views/Line";
import BarChart from "@/components/BarChart"
import LineChart from "@/components/LineChart"


describe("Chart tests",()=>{

    test("Line chart renders",()=>{

        const wrapper = mount(Line);

        expect(wrapper.find("button").text()).toBe("Click me");
    })

    test("Bar chart renders",()=>{

        const wrapper = mount(Bar)

        expect(wrapper.find("button").text()).toBe("Update!");
        
    })

    test("Line chart Data test",  async  ()=> {
        const wrapper = mount(LineChart);
        
        const series_Old = wrapper.vm.series;
        await  wrapper.find("button").trigger("click");
        wrapper.vm.$nextTick().then(()=>{
        }).catch(error=>{console.error(error)});

        expect(series_Old).not.toMatchObject(wrapper.vm.series);
    })

    test("Bar chart Data test",  async  ()=> {
        const wrapper = mount(BarChart);
        
        const series_Old = wrapper.vm.series;
        await  wrapper.find("button").trigger("click");
        wrapper.vm.$nextTick().then(()=>{
        }).catch(error=>{console.error(error)});
        expect(series_Old).not.toEqual(wrapper.vm.series);
    })

})
