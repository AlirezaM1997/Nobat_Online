const DoctorList = () => {
  return (
    <>
      <option value={""} disabled>
        انتخاب کنید
      </option>
      <option value={`عمومی`}>پزشک عمومی</option>
      <option value={`داخلی`}>متخصص داخلی</option>
      <option value={`زنان`}>متخصص زنان</option>
      <option value={`اعصاب`}>متخصص اعصاب و روان</option>
      <option value={`اطفال`}>متخصص اطفال</option>
      <option value={`حلق`}>متخصص گوش و حلق و بینی</option>
      <option value={`قلب`}>متخصص قلب و عروق</option>
      <option value={`پوست`}>متخصص پوست</option>
      <option value={`اورولوژی`}>متخصص اورولوژی</option>
      <option value={`چشم`}>متخصص چشم</option>
      <option value={`غدد`}>متخصص غدد</option>
      <option value={`ارتوپدی`}>متخصص ارتوپدی</option>
      <option value={`بیهوشی`}>متخصص بیهوشی</option>
      <option value={`رادیولوژی`}>متخصص رادیولوژی</option>
      <option value={`جراحی`}>متخصص جراحی</option>
      <option value={`زیبایی`}>متخصص زیبایی</option>
      <option value={`عفونی`}>متخصص بیماری های عفونی</option>
      <option value={`روماتولوژی`}>متخصص روماتولوژی</option>
      <option value={`تغذیه`}>متخصص تغذیه</option>
      <option value={`مامایی`}>مامایی</option>
      <option value={`دندانپزشکی`}>دندانپزشکی</option>
      <option value={`روانپزشکی`}> روانپزشکی</option>
      <option value={`روانشناسی`}>روانشناسی</option>
    </>
  );
};
export default DoctorList;