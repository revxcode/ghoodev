import { writable } from 'svelte/store';

export const sections = writable<Record<string, HTMLElement>>({});
