import { writable } from 'svelte/store'

export const currentPage = writable('')
export const isMenuOpen = writable(false)
export const storePosts = writable()
export const storeUniqueCategories = writable()