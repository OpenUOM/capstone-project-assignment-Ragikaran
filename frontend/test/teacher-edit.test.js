import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher UI`
    .page`http://localhost:4401/`
test
('Testing edit teachers', async t => {
    await t.navigateTo("/");
    const editButton = Selector('[id^="teacher-edit-"]').nth(0);
    const editButtonId = await editButton.getAttribute('id');
    const teacherId = editButtonId.replace('teacher-edit-', '');

    await t.click(editButton);

    await t.typeText("#teacher-name", "Changed Teacher Name");
    await t.typeText("#teacher-age", "99");
    await t.click("#teacher-edit");

    await t.navigateTo("/");

    const table = Selector('#teacher-table')
    const rowCount = await table.find('tr').count;

    let found = false;
    for (let i = 1; i < rowCount; i++) { 
    let rowText = await table.find('tr').nth(i).innerText;
    if (rowText.includes("Changed Teacher Name")) {
        found = true;
        break;
    }
}
await t.expect(found).ok("Could not find updated teacher name in table");


    await t.click(`#teacher-delete-${teacherId}`);
});
