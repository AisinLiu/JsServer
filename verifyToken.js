/*
 * @Author: Sean season.xiao@yuanqu-tech.com
 * @Date: 2024-04-23 19:04:15
 * @LastEditors: Sean season.xiao@yuanqu-tech.com
 * @LastEditTime: 2024-04-26 16:01:28
 * @FilePath: /undefined/Users/sean/Desktop/verifyToken.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {RecaptchaEnterpriseServiceClient} = require('@google-cloud/recaptcha-enterprise').v1;





/**
  * 创建评估以分析界面操作的风险。
  *
  * projectID: 您的 Google Cloud 项目 ID。
  * recaptchaSiteKey: 与网站/应用关联的 reCAPTCHA 密钥
  * token: 从客户端获取的已生成令牌。
  * recaptchaAction: 与令牌对应的操作名称。
  */

async function verify(ctoken,action) {
  // 创建 reCAPTCHA 客户端。

  // 待办事项：在运行示例之前，替换令牌和 reCAPTCHA 操作变量。
  const projectID = "mitrade-4950c";
  const recaptchaKey = "6Lc4LrspAAAAAJLT0vM0dx-cDhxVDP47dX3HG2yD";
  const token = ctoken??"03AFcWeA4NN9ZSEnj-JbP_KYdqKvgY3bbnQEjDiSPdclF7HCh4QsfFV34Tkhy18BlJ3ofyJIYi-1OXQaOE64s34oXpgJmXGjgi0UoDwB4Z4lancoJZnIsdNrzFecTJMx4sbxwdCT5jK8xWaay-Fj9YHTEHMCBlSkvBFBKA6NZtrbZQ8g10uF5LPMV99buDT-3tTwxcUlLxxkH2CvElDCG8AFFx69nNaegdyvNgPtJavxndlvt4t7OzohJaYxlbEOanuQSYnGZt-5G-rK_tZ4v0P_Pnm1uVlHfKZU5rBdgm05iqRKFsgxdr1yOfFB-OLmhiflriYdTl6xTk-diOij1mG5TFvz2_ZDv1Qj5cNhSZ2qduU-LcefyoZ8_IZKTNYvKiyUVOwss9i5Ksr_sYSkCsvBBeXjqSXjs3PlNdBKCqbqCEFAKpkS0psI63cjHvAZX1jiQUSMxIt4Cpa7RvSjI8Ro2u_bQZpZYWOColt9Uc13sUAGm8MoB0J6kEsAG0UGxw8d4KxNk-dFd51kBTwLemx8tfcMvuytQmXVbOBifb7zVRNcMyfTilhdHNos_PJD8aeJfMsHrWW5TNhgSOEEv-WJA1TyRiTgZOMWj15jGlZN_mc2IDgYcPjZBuK3V6F3uuZR6N6RUdci5kH5yTg0dQ32bpxn5VyOYe7eCbBKs-wXtU6YZ-Lt-j2cx6SAPKCvnthsU5nmpiYotyK5sO0ENK5e_i1kuWUWPtRI5zZ2mV7w8iHO6OunIhs7SS8bGm3dha2g-OsDGD8Wml2zzSalIihJMmGQppDGkp0I9Aw0qlxyfoTPbKgZle1RIqd0hH0x_r2XWIjxNxyMZtGwLOEQXSfwmeJL78U14AUZGWDabOnJeLxXULLP1kQL7IDilIMThZeQe7RijteJtwm1VCSnD23k_5q0EZpS2RdOFh-dObYJV3U3YhCNBpW6DA2kB4BUDKcfEV5XNxwaiPIszGmaPcd-N3ecf4qxcFDG6keFRdPdfKI6eJlJXU6gjsZNzA6o_Itd7PKE7B3FswPJYybVA6Kzkp0zeVtZMo9JwOKgIhkYBlKft2jSYiw5lnH43FBIBFtZpLpUADmzEWX4jHkEhpzBL63fjWuYQTBRW_-BC1N4Sfx-Pq_gyn3KRK0zx-4yQWQ4JEy45gNzM_0JlHYX8xgTQahUbR5BbYENgm58t_opN_YWqaxm5iFVMSv4dybqtROzBimzEIGCToc4WnH5Q-5on4hmigcCQsux0N9mutnDsWDSr-3dD6EoZ5p5-PC0mG1VskCQ9fPZ5ehwebpd_nCXc_fZgLJ2x3JhXdR2eLkFxIOsZSZrpM-Ui8ZKrUHgfs_f5j4GIPCD_q5275aTHFDD9E2iFHevBa0hdEac28IX4Gf3x3XrNMiWXICUDws-q1SLXds_ucRsksPzX9N5IFId63yRyDfNL0AGTY5BVi_cjlIL7k3fG0-i-UgN15jCrLDiGMjMGf0LkhRL9UgTNuH9MmhWWzDOZqFiYqkQXdCIDN0NfcvjbFO6Q-Q7jiPQg6aLo6VCzdaxYTwCHmNkarlM3v3TA9GXK30nitwCJ1M8eYDCCDOUFnQry-RdFrYVNpxcW7_PdGWjP5wIKZCyxLgh9hz9UwBoDkhCfv2koyiHj6l3deZAZlyfrw1HoB8KYhLAUKlPkhhVzURrRlzQ9MFIhDVp9UDPbu-ya07bZeCTppH2Niy95Z4Nvcyk-h-FKGJalxLjbDnhMClgVHREVMcRkIm1vO1Of-bctLZGUTsOXY2FWtJ61iPAMRaRjotEkxv8Z26hDvZuZNq-WNPTPt-H7NhI7aHnONME3ikoORaRtRCXVGD7IaCpLIBM2jHEQ1VHOy-4vnJ-QfQqG713OzLTy659wSuSI2QrETRMCCEp0yMgv7eSSl9W__KarX3Fk4klhXwIzv7SHAmZPVZHG1ZYPzrWS5AhVYHAuyW54NqlWAdE3ncebAevk";
  const recaptchaAction = action??"VERIFY_MOBILE_PHONE";
  // 待办：在退出方法前，对客户端生成代码进行缓存（推荐）或调用 client.close()。
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  // 构建评估请求。
  const request = ({
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  });

  const [ response ] = await client.createAssessment(request);

  // 检查令牌是否有效。
  if (!response.tokenProperties.valid) {
    console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`);
    return null;
  }

  // 检查是否执行了预期操作。
  // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
  if (response.tokenProperties.action === recaptchaAction) {
    // 获取风险得分和原因。
    // 如需详细了解如何解读评估，请参阅：
    // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
    // alert(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
    // response.riskAnalysis.reasons.forEach((reason) => {
    //   console.log(reason);
    // });

    return response.riskAnalysis.score;
  } else {
    console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
    return null;
  }
}

module.exports.vToken = verify;