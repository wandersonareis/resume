import { TestBed } from '@angular/core/testing';
import { MarkdownPipe } from './markdown.pipe';

describe('MarkdownPipe', () => {
  let pipe: MarkdownPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    pipe = new MarkdownPipe();
  });

  it('create an instance', () => {
    const pipe = new MarkdownPipe();
    expect(pipe).toBeTruthy();
  });

  it('should parse markdown to HTML', async () => {
    const input = "# Hello, World!";
    const expectedOutput = "<h1>Hello, World!</h1>";
    const result = await pipe.transform(input);
    console.log("parsed", result);

    expect(result.trim()).toEqual(expectedOutput.trim());
  });

  it('should return an empty string if the input is an empty string', async () => {
    const input = '';
    const result = await pipe.transform(input);
    expect(result).toEqual('');
  });
});
