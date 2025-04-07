import { ChevronIcon } from "../chevron-icon/ChevronIcon";
import {
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  ChevronButton,
  FilterContainer,
  Year,
  YearContainer,
  YearText,
} from "./Calendar.styles";

const Calendar = () => {
  return (
    <>
      <CalendarContainer>
        <CalendarHeader>
          <CalendarTitle>Календарь</CalendarTitle>
          <FilterContainer>
            <YearContainer>
              <ChevronButton rotate={0}>
                <ChevronIcon
                  rotate={0}
                  src="/assets/logos/calendar/chevron-left.svg"
                />
              </ChevronButton>
              <Year>
                <YearText>Июль, 2024</YearText>
              </Year>
              <ChevronButton rotate={180}>
                <ChevronIcon
                  rotate={0}
                  src="/assets/logos/calendar/chevron-left.svg"
                />
              </ChevronButton>
            </YearContainer>
            {/* shuyerga responsible toggle yozmoqchi bo'lib turgan edi */}
          </FilterContainer>
        </CalendarHeader>
      </CalendarContainer>
    </>
  );
};

export default Calendar;
