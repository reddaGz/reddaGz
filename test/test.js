describe("check sum",function()
{
    it ("check sum ",function()
    {
        assert.equal(add(2,3),5);
        assert.equal(add(2,4),6);
    });
    it ("check sum ",function()
    {
        assert.equal(add(2,3),9);
        assert.equal(add(2,4),8);
    });
 
});
describe("check mul",function()
{
    it ("check mul ",function()
    {
        assert.equal(mult(2,3),6);
        assert.equal(mult(2,4),8);
    });
    it ("check sum ",function()
    {
        assert.equal(mult(2,3),9);
        assert.equal(mult(2,4),8);
    });
 
});