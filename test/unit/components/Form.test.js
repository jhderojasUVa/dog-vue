import { mount } from "@vue/test-utils";
import { expect } from "chai";
import { nextTick } from "vue";
import { describe, it } from "vitest";

import Form from "../../../src/components/form/Form.vue";

describe('Form component', () => {
    it('Check if is emiting ok', async () => {
        const goodData = {
            fileUrl: 'something',
            description: 'foo'
          }

        const wrapper = mount(Form, goodData);

        wrapper.find('button').trigger('click');
        // await nextTick()

        expect(wrapper.emitted().sendEverything[0][0]).toEqual(goodData);
    })
});