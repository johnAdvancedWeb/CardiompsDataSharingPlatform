import { shallowMount } from "@vue/test-utils";
import posts from "@/views/MyPosts";

describe("MyPost Component Tests", ()=> {
    test("Render component", ()=>{
        const wrapper = shallowMount(posts);


        expect(wrapper.text()).toMatch("My Posts");
    });

    test("renders the title and description for each post that is passsed to MyPost", ()=>{
        const wrapper = shallowMount(posts,{
            props: { 
                posts: [ {title : "Test blog title 1", description: "Test blog description 1",},
                        {title : "Test blog title 2", description: "Test blog description 2",},
                    ]
            }
        })

        const DomText = wrapper.text();
        expect(DomText).toContain('Test blog title 1');
        expect(DomText).toContain("Test blog description 1");
        expect(DomText).toContain("Test blog title 2")
        expect(DomText).toContain("Test blog description 2")
    })

})