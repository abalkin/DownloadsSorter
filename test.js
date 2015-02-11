casper.test.begin('2 + 2 = 4', 1, function suite(test) {
    test.assertEquals(2 + 2, 4);
    test.done();
});
