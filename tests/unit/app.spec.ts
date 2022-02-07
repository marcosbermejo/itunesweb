import { createLocalVue, mount } from '@vue/test-utils'
import SearchForm from '../../src/components/SearchForm.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)

describe('SearchForm', () => {

  const localVue = createLocalVue()
  let vuetify: Vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should be disabled if term is less than 3 characters long', async () => {
    const wrapper = mount(SearchForm, {
      localVue,
      vuetify
    })

    wrapper.setData({ term: 'aa' })
    expect(wrapper.find('button').attributes().disabled).toEqual('disabled')
  
    const input = wrapper.find('input[type="text"]')
    await input.setValue('Red hot chili peppers')

    expect(wrapper.find('button').attributes().disabled).toBeUndefined()
  })

})