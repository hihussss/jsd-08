import { Setting } from "../class/setting.js";


test('changeSetting', () => {
    const setting = new Setting();
    
    setting.changeSetting([['theme', 'dark'], ['music','pop'], ['difficulty', 'hard']]);
    
    expect(setting.settings).toEqual(new Map([['theme','dark'], ['music','pop'], ['difficulty','hard']]));
})