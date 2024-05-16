import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./home.module.css"
import NaverMap from "@/components/NaverMap/NaverMap";
import { getFoogja } from "@/firebase/firebasedb";

export default async function Home() {
  const result = await getFoogja()
  
  return (
    <main className={styles.home}>
      <section className={styles.hometop}>
        <select>
          <option value="">모든유튜버</option>
          <option value="Gongchelin">공혁준</option>
          <option value="Foogja">또간집</option>
        </select>

        <select>
          <option value="">전체</option>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="일식">일식</option>
          <option value="양식">양식</option>
          <option value="아시아">아시아</option>
          <option value="구이">고기</option>
          <option value="해물">해물</option>
          <option value="분식">분식</option>
          <option value="면">면</option>
          <option value="디저트">디저트</option>
        </select>
        <div className='search-input'>
          <input placeholder='음식종류를 입력하세요'></input>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </div>
      </section>
      {/* <Kakaomap/>       */}
      <NaverMap/>

    </main>
  );
}
