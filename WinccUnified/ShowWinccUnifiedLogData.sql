SELECT
 	LogTagName.Name, 	strftime('%Y-%m-%d %H:%M:%f',(("pk_TimeStamp"/86400/1.0E+7)-134774)*86400, 'unixepoch') AS UTC_TimeStamp, 
 						strftime('%Y-%m-%d %H:%M:%f',(("pk_TimeStamp"/86400/1.0E+7)- 134774)*86400, 'unixepoch', 'localtime') AS Local_TimeStamp,
					/*	printf('0x%X', LogSegment.Quality ) AS QualityCode, 	*/
						"value" FROM "LoggedProcessValue" AS LogSegment
INNER JOIN LoggingTag AS LogTagName
ON LogTagName.pk_Key = LogSegment.pk_fk_Id


/*	SELECT strftime('%Y-%m-%d %H:%M:%f',(("pk_TimeStamp"/86400/1.0E+7)- 134774)*86400, 'unixepoch', 'localtime') AS Local_TimeStamp,"value" FROM "LoggedProcessValue";	*/