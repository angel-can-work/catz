import { SearchFilterPipe } from './pipes/search-filter.pipe';

xdescribe('SearchFilterPipe', () => {
  const pipe = new SearchFilterPipe();
  const breeds = [
    {name: 'Ashley'},
    {name: 'BRITNEY'},
    {name: 'cAm'},
    {name: 'davey'}
  ]

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return initial array when searchTerm empty', () => {
    expect(pipe.transform(breeds, '')).toBe(breeds);
  });

  it('return filtered array given searchTerm', () => {
    expect(pipe.transform(breeds, 'it')).toEqual([{name: 'BRITNEY'}]);
    expect(pipe.transform(breeds, 'A')).toEqual([{name: 'Ashley'}, {name: 'cAm'}, {name: 'davey'}]);
    expect(pipe.transform(breeds, '1')).toEqual([]);
  });
});
