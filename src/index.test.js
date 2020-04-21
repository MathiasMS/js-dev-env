import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('First test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	})
})

describe('index.html', () => {
	it('should say hellou', (done) => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, (err, window) => {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal('Testing');
			done();
			window.close();
		})
	})
})
