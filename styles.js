import { StyleSheet, Platform } from 'react-native';

export const COLORS = {
  bg: '#0D1117',
  card: '#161B22',
  cardBorder: '#21262D',
  accent: '#C9A84C',
  accentLight: '#E6C875',
  accentDark: '#8B6914',
  textPrimary: '#E6EDF3',
  textSecondary: '#8B949E',
  textMuted: '#484F58',
  holiday: '#58A6FF',
  holidayBg: '#0D2137',
  shabbat: '#C9A84C',
  shabbatBg: '#1C1608',
  timeIn: '#3FB950',
  timeOut: '#F85149',
  divider: '#21262D',
  headerBg: '#010409',
  pillBg: '#21262D',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  // ── Header ──────────────────────────────────────────────
  header: {
    backgroundColor: COLORS.headerBg,
    paddingTop: Platform.OS === 'android' ? 16 : 0,
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 28,
    marginBottom: 2,
  },
  headerTitle: {
    fontFamily: 'ShmulikCLM',
    fontSize: 22,
    color: COLORS.accentLight,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontFamily: 'ShmulikCLM',
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },

  // ── Date Picker ─────────────────────────────────────────
  datePill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.pillBg,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  datePillText: {
    fontFamily: 'ShmulikCLM',
    fontSize: 15,
    color: COLORS.textPrimary,
    marginRight: 6,
  },
  datePillIcon: {
    fontSize: 16,
  },
  datePickerWrapper: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  confirmButton: {
    backgroundColor: COLORS.accent,
    marginHorizontal: 40,
    marginBottom: 12,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontFamily: 'ShmulikCLM',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ── Scroll hint ─────────────────────────────────────────
  scrollHint: {
    fontFamily: 'ShmulikCLM',
    fontSize: 12,
    color: COLORS.textMuted,
    textAlign: 'center',
    paddingBottom: 6,
  },

  // ── Card ────────────────────────────────────────────────
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    marginHorizontal: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    overflow: 'hidden',
  },
  cardShabbat: {
    borderColor: COLORS.accentDark,
  },
  cardHoliday: {
    borderColor: '#1A4A7A',
  },

  // ── Card Header ─────────────────────────────────────────
  cardHeader: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  cardHeaderShabbat: {
    backgroundColor: COLORS.shabbatBg,
  },
  cardHeaderHoliday: {
    backgroundColor: COLORS.holidayBg,
  },
  parashaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  parashaEmoji: {
    fontSize: 18,
    marginLeft: 6,
  },
  parashaTitle: {
    fontFamily: 'ShmulikCLM',
    fontSize: 22,
    color: COLORS.accentLight,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.accentDark,
  },
  holidayTitle: {
    color: COLORS.holiday,
    textDecorationColor: '#1A4A7A',
  },
  noLink: {
    textDecorationLine: 'none',
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    gap: 8,
  },
  gregDate: {
    fontFamily: 'ShmulikCLM',
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  dateSep: {
    color: COLORS.textMuted,
    fontSize: 14,
  },
  hebDate: {
    fontFamily: 'ShmulikCLM',
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  // ── Times Grid ──────────────────────────────────────────
  timesGrid: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  timesHeaderRow: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingHorizontal: 4,
  },
  timesHeaderSpacer: {
    flex: 1.2,
  },
  timesHeaderCell: {
    flex: 1,
    alignItems: 'center',
  },
  timesHeaderIn: {
    fontFamily: 'ShmulikCLM',
    fontSize: 13,
    color: COLORS.timeIn,
    textAlign: 'center',
  },
  timesHeaderOut: {
    fontFamily: 'ShmulikCLM',
    fontSize: 13,
    color: COLORS.timeOut,
    textAlign: 'center',
  },
  timesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 4,
    borderRadius: 8,
    marginBottom: 2,
  },
  timesRowAlt: {
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  cityName: {
    flex: 1.2,
    fontFamily: 'ShmulikCLM',
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'right',
  },
  timeCell: {
    flex: 1,
    alignItems: 'center',
  },
  timeIn: {
    fontFamily: 'ShmulikCLM',
    fontSize: 17,
    color: COLORS.timeIn,
    fontWeight: '600',
  },
  timeOut: {
    fontFamily: 'ShmulikCLM',
    fontSize: 17,
    color: COLORS.timeOut,
    fontWeight: '600',
  },
  timesDivider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginHorizontal: 12,
    marginBottom: 4,
  },

  // ── Loading ──────────────────────────────────────────────
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
  },
  loadingEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  loadingText: {
    fontFamily: 'ShmulikCLM',
    fontSize: 22,
    color: COLORS.accentLight,
    textAlign: 'center',
  },
  loadingSubText: {
    fontFamily: 'ShmulikCLM',
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },

  // ── Footer ──────────────────────────────────────────────
  footer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
  },
  copyrights: {
    fontFamily: 'ShmulikCLM',
    fontSize: 11,
    color: COLORS.textMuted,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
